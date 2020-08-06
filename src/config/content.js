import googlechromemac from "@/shortcuts/google-chrome-mac.json";
import googledocsmac from "@/shortcuts/google-docs-mac.json";
import googledrive from "@/shortcuts/google-drive.json";
import googlemailmac from "@/shortcuts/google-mail-mac.json";
import googleslides from "@/shortcuts/google-slides.json";
import googlespreadsheets from "@/shortcuts/google-spreadsheets.json";
import photoshopmac from "@/shortcuts/photoshop-mac.json";
import premieremac from "@/shortcuts/premiere-mac.json";
import vim from "@/shortcuts/vim.json";

export const shortcuts = {
  googlechromemac,
  googledocsmac,
  googledrive,
  googlemailmac,
  googleslides,
  googlespreadsheets,
  photoshopmac,
  premieremac,
  vim
};

export const softwares = {
  googlechromemac: [],
  googledocsmac: [],
  googledrive: [],
  googlemailmac: [],
  googleslides: [],
  googlespreadsheets: [],
  photoshopmac: [],
  premieremac: [],
  vim: []
};

export const category = ["Productivity", "Collaboration", "Design", "Utility"];

const list = [
  {
    name: "Chrome",
    platform: "mac",
    file: "google-chrome-mac",
    var: "googlechromemac",
    category: "Utility"
  },
  {
    name: "Google Docs",
    platform: "mac",
    file: "google-docs-mac",
    var: "googledocsmac",
    category: "Collaboration"
  },
  {
    name: "Google Drive",
    platform: "all",
    file: "google-drive",
    var: "googledrive",
    category: "Collaboration"
  },
  {
    name: "Google Mail",
    platform: "mac",
    file: "google-mail-mac",
    var: "googlemailmac",
    category: "Productivity"
  },
  {
    name: "Google Slides",
    platform: "all",
    file: "google-slides",
    var: "googleslides",
    category: "Productivity"
  },
  {
    name: "Google Spreadsheets",
    platform: "all",
    file: "google-spreadsheets",
    var: "googlespreadsheets",
    category: "Productivity"
  },
  {
    name: "Photoshop",
    platform: "mac",
    file: "photoshop-mac",
    var: "photoshopmac",
    category: "Design"
  },
  {
    name: "Premiere",
    platform: "mac",
    file: "premiere-mac",
    var: "premieremac",
    category: "Design"
  },
  {
    name: "Vim",
    platform: "all",
    file: "vim",
    var: "vim",
    category: "Utility"
  }
];

export default list;
