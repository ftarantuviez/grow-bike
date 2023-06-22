import React from "react";
import Typography from "@mui/material/Typography";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Box from "@mui/material/Box";
import Image from "next/image";
import { StyledContainer } from "./BikeCard.styles";

type BikeCardProps = {
  image: string;
  title: string;
  description: string;
  type: "vintage" | "electric" | "normal";
  color: string;
  id: string;
};

const dataByType = {
  vintage: {
    icon: <FilterVintageIcon color="warning" />,
    iconName: "Vintage",
  },
  normal: {
    icon: <AutoAwesomeIcon color="primary" />,
    iconName: "Normal",
  },
  electric: {
    icon: <BatteryChargingFullIcon color="success" />,
    iconName: "Electric",
  },
};

const BikeCard = (props: BikeCardProps) => {
  const { image, title, type, color, id } = props;

  const { icon, iconName } = dataByType[type];
  return (
    <StyledContainer backgroundColor={color} href={`/bikes/${id}`}>
      <div className="backgroundAnimation" />
      <Box position="relative" display="flex" justifyContent="center">
        <Image src={image} width="500" height="500" alt={title} />
      </Box>

      <Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign={"center"}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
        >
          <Box display="flex" alignItems="center" mb={0.5}>
            {icon}
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize="medium"
              ml={0.5}
            >
              {iconName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default BikeCard;
