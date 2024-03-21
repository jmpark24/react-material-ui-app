import './App.css';
import { Box, Button, Stack, Typography } from '@mui/material';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { AcUnit, AccessibilityNew } from '@mui/icons-material';
import styled from '@emotion/styled';
import { blue, green, red } from '@mui/material/colors';

function App() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
            display: { xs: 'none', sm: 'block' },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: 'secondary.main', opacity: [0.9, 0.8, 0.7] },
          }}
        />
      </Stack>

      <Button variant="text">Hello world!</Button>
      <Button fullWidth startIcon={<AcUnit />} size="large" variant="contained">
        Hello world!
      </Button>
      <Button endIcon={<AccessibilityNew />} variant="outlined">
        Hello world!
      </Button>
      <Button
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          '&:hover': {
            backgroundColor: 'black',
          },
          '&:disabled': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>Custom Button style</CustomButton>

      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Button color="secondary">Theme Button</Button>
      <CustomThemeButton>Custom Theme Button</CustomThemeButton>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
}

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  margin: 10,
  '&:hover': {
    backgroundColor: 'black',
  },
  '&:disabled': {
    backgroundColor: 'white',
    color: 'black',
  },
}));

const CustomButton = styled(Button)({
  backgroundColor: 'gray',
  color: 'white',
  margin: 10,
  '&:hover': {
    backgroundColor: 'black',
  },
  '&:disabled': {
    backgroundColor: 'white',
    color: 'black',
  },
});

export default App;
