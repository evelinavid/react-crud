import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Box,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';

let imgFieldCount = 0;
const createId = () => {
  imgFieldCount += 1;
  return String(imgFieldCount);
};

const initialIds = [createId()];

const ImageField = () => {
  const [imgFields, setImgFields] = React.useState<string[]>(initialIds);
  const addImgField = () => setImgFields([...imgFields, createId()]);
  const removeImgField = (id:string) => setImgFields(
    imgFields.filter((imgId) => imgId !== id),
  );

  return (
    <Box>
      <Box sx={{ width: 1 }}>
        {imgFields.map((id) => (
          <TextField
            key={id}
            label="Image"
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
