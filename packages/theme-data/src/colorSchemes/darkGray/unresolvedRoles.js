import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";
import avatarBundle from "./components/avatarBundle";
import button from "./components/button";
import divider from "./components/divider";
import iconButton from "./components/iconButton";
import input from "./components/input";
import slider from "./components/slider";
import tag from "./components/tag";
import thumbnail from "./components/thumbnail";
import tile from "./components/tile";
import tooltip from "./components/tooltip";

const darkGrayThemeConfig = extendTheme(
  darkBlueTheme.unresolvedRoles,
  Object.assign(
    {},
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    avatarBundle,
    button,
    divider,
    iconButton,
    input,
    slider,
    tag,
    thumbnail,
    tile,
    tooltip
  )
);

export default darkGrayThemeConfig;
