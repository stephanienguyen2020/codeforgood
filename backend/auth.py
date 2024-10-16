import hashlib
from flask import Flask, render_template, session, url_for, redirect, Blueprint, jsonify
from authlib.integrations.flask_client import OAuth
import os
from datetime import datetime, timedelta

# create a blueprint for authentication
auth_bp = Blueprint("authentication", __name__)

# openid connect authentication with google
def init_oauth(app) -> None:
    oauth = OAuth(app)
    oauth.register(
        name='google',
        client_id=app.config["GOOGLE_CLIENT_ID"],
        client_secret=app.config["GOOGLE_CLIENT_SECRET"],
        server_metadata_url= 'https://accounts.google.com/.well-known/openid-configuration',
        client_kwargs={
            'scope': 'openid email profile'
        }
    )

    auth_bp.oauth = oauth

@auth_bp.route("/login-google", methods=['GET']) 
def login_google():
    oauth_client = auth_bp.oauth.google
    redirect_uri = url_for(
        "authentication.auth_google", _external=True,
    )

    nonce = hashlib.sha256(os.urandom(16)).hexdigest()
    session['nonce'] = nonce

    return oauth_client.authorize_redirect(redirect_uri, nonce=nonce)

@auth_bp.route('/auth-google')
def auth_google():
    oauth_client = auth_bp.oauth.google
    token = oauth_client.authorize_access_token()

    # retreive the nonce from the session
    nonce = session.get('nonce')
    if not nonce:
        return jsonify({"error": "Nonce not found in session"}), 400
    
    user = oauth_client.parse_id_token(token, nonce=nonce)

    session.pop('nonce', None)

    # pull information from DB and create a JWT with all of the user info
    # WIP, add DB QUERY FUNCTIONALITY TO ADD TO TOKEN

    return redirect("http://localhost:3000/user-survey")

# return the authentication blueprint
def create_authentication_blueprint():
    return auth_bp
