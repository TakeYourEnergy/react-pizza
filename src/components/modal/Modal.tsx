import React, { useEffect, useMemo, FC } from 'react';

interface IModal {
	children: React.ReactNode;
}

export const Modal: FC<IModal> = ({ children }) => {
	return <>{children}</>;
};
