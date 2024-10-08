import { Box } from "@mui/material";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Carousal from "./components/Carousal";
import ImageMarquee from "./components/ImageMarquee";
import award1 from "./assets/img.jpg";
import award2 from "./assets/img1.jpg";
import award3 from "./assets/img2.jpg";



function App() {
  const awards = [award1, award2, award3];
  return (
    <>
      <Header />
      <Carousal />
      <Box sx={{  direction: 'ltr' ,mt: 2}}>
      <ImageCard />
      
    </Box><ImageMarquee images={awards}/>
    </>
  );
}

export default App;
