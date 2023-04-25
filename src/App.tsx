import { useState } from "react";
import { Stack } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { ThemeProvider } from "./ThemeProvider";
import "dayjs/locale/ja";

export default function App() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <DatePicker
          getDayProps={(date) => {
            if (date.getDay() === 6) {
              return {
                sx: (theme) => ({
                  color: theme.colors.blue,
                })
              }
            }

            return {}
          }}
          firstDayOfWeek={0}
          weekendDays={[0]}
          monthLabelFormat="YYYY年MMM"
          locale="ja"
          value={value}
          onChange={setValue}
        />
      </Stack>
    </ThemeProvider>
  );
}
