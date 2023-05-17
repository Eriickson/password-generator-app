import { colors } from "@/theme/colors";
import { Box, Center } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Range, getTrackBackground } from "react-range";

interface SliderProps {
  onChange: (value: number) => void;
}

export const Slider: FC<SliderProps> = ({ onChange }) => {
  const [limits] = useState({ min: 6, max: 24 });
  const [value, setValue] = useState([6]);

  return (
    <Center h="8" px="2.5">
      <Range
        values={value}
        step={1}
        min={limits.min}
        max={limits.max}
        onChange={(value) => {
          setValue(value);
          onChange(value[0]);
        }}
        renderTrack={({ props, children }) => (
          <Box
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style }}
            height="1.5"
            w="100%"
          >
            <Box
              ref={props.ref}
              h="1.5"
              w="100%"
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: [colors.brightgreen[500], colors.background[500]],
                  ...limits,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </Box>
          </Box>
        )}
        renderThumb={({ props }) => <Box outline="none" h="5" w="5" bgColor="white" {...props} />}
      />
    </Center>
  );
};
