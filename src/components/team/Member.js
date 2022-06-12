import React, { Fragment, useState } from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Switch from "react-switch";
import TextField from "@mui/material/TextField";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // underline: {

      //   },
      "&.MuiFilledInput-root": {
        border: "1px solid #D8D8D8",
        borderRadius: "13px",
        background: "#fff",
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
      "&.Mui-focused": {
        "&.MuiInputLabel-root": {
          color: "red",
        },
        border: "1px solid #D8D8D8",
        borderRadius: "13px",
        background: "#fff",
        ".MuiInput-underline": {},
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
  })
);

const TeamMember = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const classes = useStyles();

  return (
    <Fragment>
      <Header>Team members</Header>
      <Row>
        <Left>
          <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
            <RemoveCircleIcon color="disabled" />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="outlined"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
        </Left>
        <Right>
          <Grid item xs={10}>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
          <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Switch
                onColor="#2400FF"
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleChange}
                checked={checked}
              />
              <Typography sx={{ marginLeft: "5px" }}>Manager</Typography>
            </Box>
          </Grid>
        </Right>
      </Row>
      <Row>
        <Left>
          <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
            <RemoveCircleIcon color="disabled" />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="outlined"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
        </Left>
        <Right>
          <Grid item xs={10}>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
          <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Switch
                onColor="#2400FF"
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleChange}
                checked={checked}
              />
              <Typography sx={{ marginLeft: "5px" }}>Manager</Typography>
            </Box>
          </Grid>
        </Right>
      </Row>
      <Row>
        <Left>
          <Grid
            item
            xs={2}
            style={{ display: "flex", alignItems: "center", width: "24px" }}
          ></Grid>
          <Grid item xs={10}>
            <TextField
              id="outlined"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
        </Left>
        <Right>
          <Grid item xs={10}>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", alignItems: "center", width: "125px" }}
          ></Grid>
        </Right>
      </Row>
      <Row>
        <Left>
          <Grid
            item
            xs={2}
            style={{ display: "flex", alignItems: "center", width: "24px" }}
          ></Grid>
          <Grid item xs={10}>
            <TextField
              id="outlined"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
        </Left>
        <Right>
          <Grid item xs={10}>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
              InputProps={{ className: classes.root }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", alignItems: "center", width: "125px" }}
          ></Grid>
        </Right>
      </Row>
      <Row>
        <Grid
          item
          xs={2}
          style={{ display: "flex", alignItems: "center", width: "24px" }}
        ></Grid>
        <Grid item xs={10}>
          <Button>
            <AddCircleIcon />
            <Typography>Add a member</Typography>
          </Button>
          <Hint>
            <Typography>You can add more members later</Typography>
          </Hint>
          <Continue>
            <ContinueButton>Continue</ContinueButton>
          </Continue>
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", alignItems: "center", width: "125px" }}
        ></Grid>
      </Row>
    </Fragment>
  );
};

export default TeamMember;

const Header = styled.p`
  font-size: 27px;
  color: #000;
  padding: 0 30px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button`
  border: 1px solid #d8d8d8;
  background-color: #efefef;
  border-radius: 13px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 60px;
  gap: 5px;
  &:hover {
    background-color: #e3e1e1;
    transition: 0.5s;
  }
`;

const Hint = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 12px;
  font-size: 14px;
`;

const Continue = styled.div`
  display: flex;
  justify-content: end;
`;

const ContinueButton = styled.button`
  background-color: #2400ff;
  height: 60px;
  width: 170px;
  color: white;
  border: none;
  border-radius: 13px;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    background-color: #12017a;
    transition: 0.5s;
  }
`;
