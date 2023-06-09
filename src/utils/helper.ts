const convertIndexToPrayerTitle = (index: number) => {
  switch (index) {
    case 0:
      return "Subuh";
    case 1:
      return "Syuruk";
    case 2:
      return "Zohor";
    case 3:
      return "Asar";
    case 4:
      return "Maghrib";
    case 5:
      return "Isyak";
    default:
      return;
  }
};

const cityStateChecker = (code: string): string => {
  const sliceCode = code.split("-");
  switch (sliceCode[0]) {
    case "jhr":
      return "johor";
    case "kdh":
      return "kedah";
    case "ktn":
      return "kelantan";
    case "melaka":
      return "melaka";
    case "ngs":
      return "negeriSembilan";
    case "phg":
      return "pahang";
    case "pls":
      return "perlis";
    case "png":
      return "pulauPinang";
    case "sbh":
      return "sabah";
    case "swk":
      return "sarawak";
    case "sgr":
      return "selangor";
    case "trg":
      return "terengganu";
    case "wlp":
      return "wilayah";
    default:
      return "wilayah";
  }
};

export default {
  cityStateChecker,
  convertIndexToPrayerTitle,
};
