// import CardFrame from "../CardFrame/CardFrame"
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Paper } from '@mui/material';
// import RatingScale from '../RatingScale/RatingScale';
// import AccordDrawer from '../AccordDrawer/AccordDrawer';
// import { useSelector } from 'react-redux'

// function FeelingCard() {
//     const questions = useSelector(store => store.questionBank)
//     console.log(questions)
//     const cardNumber = questions[0][0]
//     const questionPrompt = questions[0][1]
//     const card = (
//         <React.Fragment>
//           <CardContent>
//             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//               Question {cardNumber}of 4
//             </Typography>
//             <Typography variant="h5" component="div">
//               {questionPrompt}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               Useless - Excellent+
//             </Typography>
//             <Typography variant="body2">
//               <RatingScale />
//               {/* well meaning and kindly.
//               <br />
//               {'"a benevolent smile"'} */}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Add Comment</Button>
//           </CardActions>
//           <AccordDrawer />
//         </React.Fragment>
//       );
//     return(
//         <CardFrame card = {card} />
//     )
// }

// export default FeelingCard