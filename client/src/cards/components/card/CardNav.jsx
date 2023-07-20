import React from "react";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from "@mui/material/CardMedia";
import imageType from "../../models/types/imageType";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardNav = () => {
  return (
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      padding="0"
    />
  );
};

export default CardNav;
