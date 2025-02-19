import { Box, Stack, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequestly Asked Questions"} />
      <Stack spacing={2}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
              dignissimos soluta obcaecati dolores, officiis sapiente doloribus
              quidem quam labore maiores deleniti? Vel eum illo alias fuga
              blanditiis incidunt consectetur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
              dignissimos soluta obcaecati dolores, officiis sapiente doloribus
              quidem quam labore maiores deleniti? Vel eum illo alias fuga
              blanditiis incidunt consectetur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Most Important questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
              dignissimos soluta obcaecati dolores, officiis sapiente doloribus
              quidem quam labore maiores deleniti? Vel eum illo alias fuga
              blanditiis incidunt consectetur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Most Asked questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
              dignissimos soluta obcaecati dolores, officiis sapiente doloribus
              quidem quam labore maiores deleniti? Vel eum illo alias fuga
              blanditiis incidunt consectetur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Most Random questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
              dignissimos soluta obcaecati dolores, officiis sapiente doloribus
              quidem quam labore maiores deleniti? Vel eum illo alias fuga
              blanditiis incidunt consectetur.
            </Typography>
            
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default FAQ;
