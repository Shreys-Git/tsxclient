// import React, { useState } from "react";
// import { TextField, List, ListItem, ListItemText } from "@mui/material";

// interface Item {
//   id: number;
//   name: string;
//   category: string;
// }

// interface SearchComponentProps {
//   items: Item[];
// }

// const SearchComponent: React.FC<SearchComponentProps> = ({ items }) => {
//   const [search, setSearch] = useState<string>("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const isMatch = (item: Item, searchTerm: string) => {
//     const lowerCasedSearchTerm = searchTerm.toLowerCase();
//     return (
//       item.name.toLowerCase().includes(lowerCasedSearchTerm) ||
//       item.category.toLowerCase().includes(lowerCasedSearchTerm)
//     );
//   };

//   const filteredItems = items.filter((item) => {
//     return isMatch(item, search);
//   });

//   return (
//     <div>
//       <TextField
//         type="text"
//         label="Search..."
//         value={search}
//         onChange={handleSearchChange}
//       />

//       <List>
//         {filteredItems.map((item) => (
//           <ListItem key={item.id}>
//             <ListItemText primary={`${item.name} - ${item.category}`} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// // export default SearchComponent;
// import React, { useState } from "react";
// import { TextField, Card, CardContent, Typography } from "@mui/material";

// interface Item {
//   id: number;
//   name: string;
//   category: string;
// }

// interface SearchComponentProps {
//   items: Item[];
// }

// const SearchComponent: React.FC<SearchComponentProps> = ({ items }) => {
//   const [search, setSearch] = useState<string>("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const isMatch = (item: Item, searchTerm: string) => {
//     const lowerCasedSearchTerm = searchTerm.toLowerCase();
//     return (
//       item.name.toLowerCase().includes(lowerCasedSearchTerm) ||
//       item.category.toLowerCase().includes(lowerCasedSearchTerm)
//     );
//   };

//   const filteredItems = items.filter((item) => {
//     return isMatch(item, search);
//   });

//   return (
//     <div>
//       <TextField
//         type="text"
//         label="Search..."
//         value={search}
//         onChange={handleSearchChange}
//       />

//       {filteredItems.map((item) => (
//         <Card key={item.id} style={{ margin: "8px", padding: "8px" }}>
//           <CardContent>
//             <Typography variant="h5">{item.name}</Typography>
//             <Typography variant="body1">Category: {item.category}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default SearchComponent;
import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface Item {
  id: number;
  name: string;
  category: string;
}

interface SearchComponentProps {
  items: Item[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ items }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const isMatch = (item: Item, searchTerm: string) => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerCasedSearchTerm) ||
      item.category.toLowerCase().includes(lowerCasedSearchTerm)
    );
  };

  const filteredItems = items.filter((item) => {
    return isMatch(item, search);
  });

  const handleRegister = (id: number) => {
    // Handle the registration logic for the specific item with the given ID
    // For example, you can redirect the user to a registration page with the item details
    console.log(`Registering item with ID: ${id}`);
  };

  return (
    <div>
      <TextField
        type="text"
        label="Search..."
        value={search}
        onChange={handleSearchChange}
      />

      {filteredItems.map((item) => (
        <Card key={item.id} style={{ margin: "8px", padding: "8px" }}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body1">Category: {item.category}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRegister(item.id)}
              style={{ marginTop: "8px" }}
            >
              Register
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchComponent;
