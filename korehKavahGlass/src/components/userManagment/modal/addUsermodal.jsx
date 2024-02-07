import React, { useEffect, useState } from "react";
import { Modal, Button, ConfigProvider, Select } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
//slices
import { useSelector, useDispatch } from "react-redux";
import {
  RsetUserManagmentEditModal,
  selectUserManagmentEditModal,
  selectUserManagmentCurrentUser,
  selectUserManagmentLastName,
  selectUserManagmentFirstName,
  selectuserManagmentAddmodal,
  RsetuserManagmentAddmodal,
} from "../../../slices/userManagmentSlices";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

const AddModal = () => {
  const dispatch = useDispatch();
  const userManagmentAddmodal = useSelector(selectuserManagmentAddmodal);
  //user this selector for  your modal change all
  // const selectUserManagmentFirstName = useSelector(
  //   selectUserManagmentFirstName
  // );
  // const selectUserManagmentLastName = useSelector(selectUserManagmentLastName);

  const handleModalCancel = () => {
    dispatch(RsetuserManagmentAddmodal(false));
  };
  // useEffect({});

  const modalStyles = {
    header: {
      background: "gray",
      padding: "20px",
    },
    body: {
      borderRadius: 5,
      marginTop: "20px",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid gray",
      marginTop: "20px",
      padding: "20px",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };
  return (
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <Modal
        title={"افزودن کاربر "}
        open={userManagmentAddmodal}
        styles={modalStyles}
        closable={false}
        onOk={handleModalCancel}
        onCancel={handleModalCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <div className="bottom-modal d-flex justify-content- between align-items-center gap-3 w-100 ">
              <Button
                style={{ background: "red", color: "white" }}
                size="large"
                onClick={() => handleModalCancel()}
              >
                لفو
              </Button>
              <Button
                className="w-100 "
                style={{ background: "blue", color: "white" }}
                size="large"
                onClick={() => handleModalCancel()}
              >
                ویرایش کاربر
              </Button>
            </div>
          </>
        )}
      >
        {/* inputs from material ui firstName lastName userName handle the access checkbox*/}
        <form>
          <Box>
            <InputLabel className="fw-bold fs-5">نام</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"

              // onChange={(e) =>
              //   dispatch(RsetuserManagmentNewFirstName(e.target.value))
              // }
            />
          </Box>
          <Box>
            <InputLabel className="fw-bold fs-5">نام خانوادگی</InputLabel>
            <TextField variant="outlined" fullWidth margin="normal" />
          </Box>

          <FormGroup>
            {}
            <FormControlLabel control={<Checkbox />} label="Checkbox 1" />

            <FormControlLabel control={<Checkbox />} label="ادمین سیستم" />
            <FormControlLabel control={<Checkbox />} label="Checkbox 3" />
            <FormControlLabel control={<Checkbox />} label="Checkbox 4" />
            <FormControlLabel control={<Checkbox />} label="Checkbox 5" />
            <FormControlLabel control={<Checkbox />} label="Checkbox 6" />
            <FormControlLabel control={<Checkbox />} label="Checkbox 7" />
          </FormGroup>
        </form>
      </Modal>
    </ConfigProvider>
  );
};

export default AddModal;
