import { COLORS } from '../constants/colors';

export const averageStyle = avg =>
	avg >= 8 ? COLORS.secondary : avg >= 6 ? COLORS.yellow : COLORS.error;
