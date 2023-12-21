// Import necessary components and styles from Material-UI
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const ModalComponent = (props) => {
  console.log("props=======", props);
  const { isopen, setIsOpen } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div>
      {/* Button to trigger the modal */}

      {/* Modal component */}
      <Modal
        sx={{ mt: 1 }}
        open={isopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Modal content */}

          <Typography id="modal-modal-description"></Typography>
          <section className=" p-2">
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 ">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-black text-center">
                  Create Student
                </h2>

                <form action="#" method="POST" className="mt-5">
                  <div className="space-y-5">
                    <div>
                      <div className="mt-1">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full Name"
                          id="name"
                        ></input>
                      </div>
                    </div>
                    <div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <div className="mt-1">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="Course"
                          placeholder="Course"
                          id="course"
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <div className="mt-1">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="number"
                            placeholder="Phone Number"
                            id="number"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="mt-1">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="id"
                            placeholder="ID"
                            id="id"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </form>
                <div className="mt-2 space-y-3">
                  <button
                    type="button"
                    className="bg-black relative inline-flex w-full items-center justify-center rounded-md border  py-2.5 text-white"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
