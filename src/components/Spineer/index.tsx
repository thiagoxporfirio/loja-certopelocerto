import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner: React.FC = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<CircularProgress
				size={64}
				thickness={4}
				disableShrink
				variant="indeterminate"
				sx={{
					color: "black"
				}}
			/>
		</div>
	);
};

export default Spinner;
