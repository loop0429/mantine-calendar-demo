import { useState } from "react";
import { Stack } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { ThemeProvider } from "./ThemeProvider";
import "dayjs/locale/ja";

export default function App() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <Calendar
          dayStyle={(date, modifiers) => {
            // 土曜日以外、outside（表示月以外の日付）であれば早期リターン
            // 戻り値の型がReact.CSSPropertiesなので{}で返す
            if (date.getDay() !== 6 || modifiers.outside === true) {
              return {}
            }

            // 単純に青(blue)で返すと選択時も青になるため、選択時は白で返す
            const color = modifiers.selected ? 'white' : 'blue'
            return { color }
          }}
          firstDayOfWeek="sunday"
          labelFormat="YYYY年MM月"
          locale="ja"
          value={value}
          onChange={setValue}
        />
      </Stack>
    </ThemeProvider>
  );
}
