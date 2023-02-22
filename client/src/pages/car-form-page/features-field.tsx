import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';

const FeaturesField = () => {
  const [features, setFeatures] = React.useState<string[]>([]);
  console.log(features);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = features.indexOf(event.target.value);
    if (index === -1) {
      setFeatures([...features, event.target.value]);
    } else {
      setFeatures(features.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Features</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  value="backupCamera"
                  checked={features.includes('backupCamera')}
                  onChange={handleSkillChange}
                />
      )}
              label="Backup camera"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  value="heatedSeats"
                  checked={features.includes('heatedSeats')}
                  onChange={handleSkillChange}
                />
      )}
              label="Heated seats"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  value="sunroofMoonroof"
                  checked={features.includes('sunroofMoonroof')}
                  onChange={handleSkillChange}
                />
      )}
              label="Sunroof/Moonroof"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  value="navigationSystem"
                  checked={features.includes('navigationSystem')}
                  onChange={handleSkillChange}
                />
      )}
              label="Navigation system"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FeaturesField;
