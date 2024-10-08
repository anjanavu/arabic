import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import  image  from "../assets/images.jpeg";
export default function ImageCard() {
  const { t } = useTranslation('translation');

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={t("lizard_title")} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t("lizard_title")} 
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {t("lizard_description")} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t("share")}</Button> 
        <Button size="small">{t("learn_more")}</Button>
      </CardActions>
    </Card>
  );
}
