import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import createId from 'uniqid';
import {
  Box,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';

const initialIds = [createId()];

const ImageField = () => {
  const [imgFields, setImgFields] = React.useState<string[]>(initialIds);
  const addImgField = () => setImgFields([...imgFields, createId()]);
  const removeImgField = (id:string) => {
    if (imgFields.length > 1) {
      setImgFields(imgFields.filter((imgId) => imgId !== id));
    }
  };
  return (
    <Box>
      <Box sx={{ width: 1, paddingBottom: 1 }}>
        {imgFields.map((id) => (
          <TextField
            key={id}
            label="Image"
            name="images"
            fullWidth
            variant="filled"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
      <Stack>
        <IconButton onClick={addImgField}>
          <AddCircleOutlineIcon sx={{ fontSize: 28, color: 'secondary.main' }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ImageField;
