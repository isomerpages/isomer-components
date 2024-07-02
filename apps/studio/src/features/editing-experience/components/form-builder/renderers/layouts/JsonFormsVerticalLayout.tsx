import type {
  LayoutProps,
  RankedTester,
  VerticalLayout,
} from "@jsonforms/core";
import { Box, VStack } from "@chakra-ui/react";
import { rankWith, uiTypeIs } from "@jsonforms/core";
import { JsonFormsDispatch, withJsonFormsLayoutProps } from "@jsonforms/react";

import { JSON_FORMS_RANKING } from "~/constants/formBuilder";

export const jsonFormsVerticalLayoutTester: RankedTester = rankWith(
  JSON_FORMS_RANKING.VerticalLayoutRenderer,
  uiTypeIs("VerticalLayout"),
);

export function JsonFormsVerticalLayoutRenderer({
  uischema,
  schema,
  path,
  enabled,
  renderers,
  cells,
}: LayoutProps) {
  const { elements } = uischema as VerticalLayout;

  return (
    <VStack spacing={2}>
      {elements.map((element) => (
        <Box key={path} w="100%">
          <JsonFormsDispatch
            uischema={element}
            schema={schema}
            path={path}
            enabled={enabled}
            renderers={renderers}
            cells={cells}
          />
        </Box>
      ))}
    </VStack>
  );
}

export default withJsonFormsLayoutProps(JsonFormsVerticalLayoutRenderer);
