import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress variant="determinate" {...props} thickness={8} />
      <CircularProgress
        variant="determinate"
        value={100}
        thickness={8}
        style={{
          position: "absolute",
          height: "50px",
          width: "50px",
          color: "rgba(15, 218, 137, 0.3)",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="innerTextCirle">{`${Math.round(props.value)}%`}</div>
      </Box>
    </Box>
  );
}
