from flask import Flask, jsonify
from auth import create_authentication_blueprint, init_oauth
from flask_cors import CORS
import os

app = Flask(__name__)

def create_app():
    app = Flask(__name__)
    CORS(app)

    
    app.config.from_pyfile("config.py")
    app.secret_key = os.getenv("SECRET_KEY")

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

     # initialize OAuth
    init_oauth(app)
    # register the authentication blueprint
    app.register_blueprint(create_authentication_blueprint(), url_prefix='/auth')

    @app.route('/')
    def index():
        return jsonify(message="Welcome!")
    return app


app = create_app()


# Start the Flask development server
if __name__ == '__main__':
    app.run(debug=True)
