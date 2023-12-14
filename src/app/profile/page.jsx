import React from "react";

export default function Pofile() {
  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-5">
        <div className="flex justify-center items-center h-full">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex">
                <div className="w-1/3 bg-gradient-to-br from-blue-500 to-purple-500 text-center text-white py-5 rounded-tl-lg rounded-bl-lg">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="mx-auto w-20 rounded-full mb-5"
                  />
                  <h5 className="text-lg font-semibold">Marie Horwitz</h5>
                  <p className="text-sm">Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="w-2/3 p-4">
                  <h6 className="text-lg font-semibold">Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                      <h6>Email</h6>
                      <p className="text-muted">info@example.com</p>
                    </div>
                    <div className="w-1/2 pl-2">
                      <h6>Phone</h6>
                      <p className="text-muted">123 456 789</p>
                    </div>
                  </div>

                  {/* Repeat the above structure for the second set of information */}

                  <div className="d-flex justify-content-start">
                    <a href="#!" className="me-3">
                      <i className="fab fa-facebook text-lg"></i>
                    </a>
                    <a href="#!" className="me-3">
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#!" className="me-3">
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
