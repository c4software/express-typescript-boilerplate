import dev from "./dev.env";
import prod from "./prod.env";

const defaultSettings = {
    port: 3000,
};

let settings = defaultSettings;
if (process.env.NODE_ENV === 'development') {
    settings = {...defaultSettings, ...dev};
} else {
    settings = {...defaultSettings, ...prod};
}

export default settings;