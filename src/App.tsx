import { Stack } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { ThemeProvider } from "./ThemeProvider";
import "dayjs/locale/ja";

export default function App() {
  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <Calendar
          firstDayOfWeek="sunday"
          labelFormat="YYYY年MM月"
          locale="ja"
        />
      </Stack>
    </ThemeProvider>
  );
}
