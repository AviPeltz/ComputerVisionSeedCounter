"use client";
import { useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";

// Sample data for seeds
const seedData = [
  {
    name: "Sunflower",
    thumbnail: "https://via.placeholder.com/50",
    description: "Sunflower seeds",
    metric: "92",
    link: "/seedProfile/sunflower",
  },
  {
    name: "Pumpkin",
    thumbnail: "https://via.placeholder.com/50",
    description: "Pumpkin seeds",
    metric: "93",
    link: "/seedProfile/pumpkin",
  },
  {
    name: "Chia",
    thumbnail: "https://via.placeholder.com/50",
    description: "Chia seeds",
    metric: "92",
    link: "/seedProfile/chia",
  },
  {
    name: "Flax",
    thumbnail: "https://via.placeholder.com/50",
    description: "Flax seeds",
    metric: "89",
    link: "/seedProfile/flax",
  },
  {
    name: "Phaseolous Vulgaris",
    thumbnail: "https://via.placeholder.com/50",
    description: "Common Bean",
    metric: "98",
    link: "https://example.com/bean",
  },
];

function SeedTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSeeds = seedData.filter((seed) =>
    seed.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Paper>
      <TextField
        label="Search Seeds"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Performance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSeeds.map((seed) => (
              <TableRow
                hover
                key={seed.name}
                onClick={() => (window.location.href = seed.link)}
              >
                <TableCell>
                  <Avatar
                    src={seed.thumbnail}
                    alt={seed.name}
                    sx={{ width: 50, height: 50 }}
                  />
                </TableCell>
                <TableCell>{seed.name}</TableCell>
                <TableCell>{seed.description}</TableCell>
                <TableCell>{seed.metric + ".00%"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default SeedTable;
