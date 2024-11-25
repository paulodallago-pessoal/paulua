//o q tem label aparece no album, oq tem description aparece na timeline
import images22 from "../assets/images/images22";
import images23 from "../assets/images/images23";
import images24 from "../assets/images/images24";

const images = [...images22, ...images23, ...images24];

const events = images.filter((image) => image.description !== undefined);

export { images, events };
