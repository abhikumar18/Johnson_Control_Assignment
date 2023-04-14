
// const Genres = ({ values }) => {
//     // Loop through the array and create a badge-like component instead of a comma-separated string
//     return (
//       <>
//         {values.map((genre, idx) => {
//           return (
//             <span key={idx} className="badge">
//               {genre}
//             </span>
//           );
//         })}
//       </>
//     );
//   };
export const COLUMNS = [
   {
    Header:'Name',
    accessor:'name'
   },
   {
    Header:'Capital',
    accessor:'capital'
   },
   {
    Header:'Subregion',
    accessor:'subregion',
   },
   {
    Header:'Currency',
    accessor:'currencies[0].name',
    // Cell: ({ cell: { value } }) => <Genres values={value} />
   },
   {
    Header:'Languages',
    accessor:'languages[0].name'
   },
]
