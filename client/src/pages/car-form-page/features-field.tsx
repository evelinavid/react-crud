import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  CheckboxProps,
} from '@mui/material';

type FeaturesFieldProps = {
  color: CheckboxProps['color'],
  defaultBackupCamera?: boolean,
  defaultHeatedSeats?: boolean,
  defaulSunroofMoonroof?: boolean,
  defaulNavigationSystem?: boolean,
};

const FeaturesField:React.FC<FeaturesFieldProps> = ({
  color,
  defaultBackupCamera,
  defaultHeatedSeats,
  defaulSunroofMoonroof,
  defaulNavigationSystem,
}) => {
  const initialFeatures = React.useMemo(() => {
    const value:string[] = [];
    if (defaultBackupCamera) value.push('backupCamera');
    if (defaultHeatedSeats) value.push('heatedSeats');
    if (defaulSunroofMoonroof) value.push('sunroofMoonroof');
    if (defaulNavigationSystem) value.push('navigationSystem');

    return value;
  }, []);

  const [features, setFeatures] = React.useState<string[]>(initialFeatures);

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = features.indexOf(event.target.value);
    if (index === -1) {
      setFeatures([...features, event.target.value]);
    } else {
      setFeatures(features.filter((feature) => feature !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Features</FormLabel>
          <FormGroup>
            <FormControlLabel
              name="features"
              control={(
                <Checkbox
                  color={color}
                  name="backupCamera"
                  value="backupCamera"
                  checked={features.includes('backupCamera')}
                  onChange={handleFeatureChange}
                />
      )}
              label="Backup camera"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color={color}
                  name="heatedSeats"
                  value="heatedSeats"
                  checked={features.includes('heatedSeats')}
                  onChange={handleFeatureChange}
                />
      )}
              label="Heated seats"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color={color}
                  name="sunroofMoonroof"
                  value="sunroofMoonroof"
                  checked={features.includes('sunroofMoonroof')}
                  onChange={handleFeatureChange}
                />
      )}
              label="Sunroof/Moonroof"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color={color}
                  name="navigationSystem"
                  value="navigationSystem"
                  checked={features.includes('navigationSystem')}
                  onChange={handleFeatureChange}
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
