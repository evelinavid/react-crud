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
  TextFieldProps,
} from '@mui/material';

type ImageFieldProps = {
  color: TextFieldProps['color'],
  colorMain: string,
  defaultImages?:string[],
};

const initialIds = [createId()];

const ImageField: React.FC<ImageFieldProps> = ({
  color,
  colorMain,
  defaultImages,
}) => {
  const imgMap = React.useMemo(
    () => defaultImages && defaultImages.reduce<{ [key: string]: string }>((prevMap, img) => ({
      ...prevMap,
      [createId()]: img,
    }), {}),
    [],
  );

  const [
    imgFields,
    setImgFields,
  ] = React.useState<string[]>(imgMap && Object.keys(imgMap) || initialIds);
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
            color={color}
            key={id}
            label="Image"
            name="images"
            fullWidth
            variant="filled"
            size="small"
            defaultValue={imgMap && imgMap[id]}
            InputProps={imgFields.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Box>
      <Stack sx={{ alignItems: 'center' }}>
        <IconButton onClick={addImgField}>
          <AddCircleOutlineIcon sx={{ fontSize: 28, color: colorMain }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ImageField;
