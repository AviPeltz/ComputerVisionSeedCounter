import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function seedProfile({ params }) {
  return (
    <Container maxWidth="lg">
      <Box>
        <h1>{params.id + " seed profile page"}</h1>
      </Box>
    </Container>
  );
}
