import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x62201706dBEB81FE5087FcF37ec95b0907cd6ce0",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "NeighborDAO access ticket",
        description: "This NFT will give you access to NeighborDAO!",
        image: readFileSync("scripts/assets/312_156.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()