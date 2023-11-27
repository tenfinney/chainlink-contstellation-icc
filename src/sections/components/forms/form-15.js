import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
// import Divider from '@mui/material/Divider';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iframe from 'react-iframe'



export const Form15 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="sm">
<Card>
<CardContent
sx={{
display: 'flex',
flexDirection: 'column',
minHeight: 400,
p: 4
}}
>
<Box
sx={{
display: 'flex',
justifyContent: 'space-between'
}}
>
<div>
<Typography variant="h4">
Starting Checkpoint 
</Typography>
<Typography
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
Each attendee must submit this form at the beginning of their MCLE activity.
</Typography>
</div>
<img
alt="Ethereum"
src="/assets/logos/stack-logos-008.png"
style={{
width: '50px',
height: '50px'
}}
/>
<img
alt="IPFS"
src="/assets/logos/stack-logos-006.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
<img
alt="Airtable"
src="/assets/logos/stack-logos-003.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
<img
alt="Metamask"
src="/assets/logos/stack-logos-021.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
</Box>
<Box
sx={{
flexGrow: 1,
mt: 3
}}
>


<hr />

<Iframe id=""
  src="https://airtable.com/embed/shr8X61yXZEAaxe7B?backgroundColor=blue" 
  frameborder="0" 
  onmousewheel="" 
  width="100%" 
  height="1750" 
  className=""
  display="block"
  position="relative"
  background="transparent" 
  border= "1px"
/>


<hr />

</Box>


</CardContent>
</Card>
</Container>
</Box>


);
