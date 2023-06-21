import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PaidIcon from "@mui/icons-material/Paid";
import Box from "@mui/material/Box";
import Image from "next/image";

type BikeCardProps = {
  image: string;
  title: string;
  description: string;
  type: "old" | "electric" | "normal";
  price: number;
  color: string;
};

const BikeCard = (props: BikeCardProps) => {
  const { image, title, description, type, price, color } = props;
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => setIsActive(!isActive);
  return (
    <Card onMouseLeave={handleHover} onMouseEnter={handleHover}>
      <Box
        bgcolor={isActive ? color : "auto"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={"/images/bikes/vintage/Ladies-Classic-7-Speed-Bike.png"}
          width="400"
          height="400"
          alt={title}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>
        <Box display="flex" alignItems="center" mb={0.5}>
          <ElectricBoltIcon color="info" fontSize="small" />
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            {type}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <PaidIcon color="success" fontSize="small" />
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            Starting from {price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default BikeCard;
