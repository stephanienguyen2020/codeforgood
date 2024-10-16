import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { signIn } from "next-auth/react"; // Import signIn function

export default function Register() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section className="page-title">
          <div className="overlay" />
        </section>
        <div>
          <section className="tf-section project-info">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form action="#">
                    <div className="project-info-form form-login style2">
                      <h6 className="title">Register</h6>
                      <h6 className="title show-mobie">
                        <Link href="/login">Login</Link>
                      </h6>
                      <h6 className="title link">
                        <Link href="/login">Login</Link>
                      </h6>
                      <p>Welcome to Risebot, please enter your details</p>
                      <div className="form-inner">
                        <fieldset>
                          <label>Email address *</label>
                          <input
                            type="email"
                            placeholder="Your email"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <label>Password *</label>
                          <input
                            type="password"
                            placeholder="Your password"
                            required
                          />
                        </fieldset>
                        <fieldset className="mb19">
                          <label>Confirm password *</label>
                          <input
                            type="password"
                            placeholder="Confirm password"
                            required
                          />
                        </fieldset>
                        <fieldset className="checkbox">
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                          />
                          <label htmlFor="checkbox" className="icon" />
                          <label htmlFor="checkbox">
                            I accept the Term of Conditions and Privacy Policy
                          </label>
                        </fieldset>
                      </div>
                    </div>
                    <div className="wrap-btn">
                      <button type="submit" className="tf-button style2">
                        Register
                      </button>
                    </div>
                  </form>

                  {/* Google OAuth Button */}
                  <div className="oauth-container">
                    <button
                      className="tf-button style2"
                      onClick={() => signIn("google")}
                    >
                      Register with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
