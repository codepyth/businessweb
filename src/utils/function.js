import moment from "moment";

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}

export const getPageTitles = (location) => {
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const pathSegment = location.pathname.split("/")[1];
  const isMonthly = pathSegment === "monthly-premium-users";
  const isYearly = pathSegment === "yearly-premium-users";

  const titleMap = {
    trial: isYearly ? "Yearly Trial Users" : "Monthly Trial Users",
    subscribed: isYearly
      ? "Yearly Subscribed Users"
      : "Monthly Subscribed Users",
    cancelled: isYearly ? "Yearly Cancelled Users" : "Monthly Cancelled Users",
    "ref-guide": "Referral Guide",
    "free-users": "Free Users Listing",
    "my-rewards": "My Rewards",
    "request-redeem": "Redeem Request",
    "point-history": "Points History",
    "coupon-history": "Coupon History",
    "redeem-history": "Redeem History",
  };

  let pageTitle = titleMap[status] || titleMap[pathSegment] || "Dashboard";

  if (status === "None") {
    pageTitle = isMonthly
      ? "Monthly Users"
      : isYearly
      ? "Yearly Users"
      : pageTitle;
  }

  let mobileHeaderTitle =
    (isMonthly || isYearly) &&
    ["trial", "subscribed", "cancelled"].includes(status)
      ? isMonthly
        ? "Monthly Premium"
        : "Yearly Premium"
      : pageTitle;

  let mobilePageTitle =
    (isMonthly || isYearly) &&
    ["trial", "subscribed", "cancelled"].includes(status)
      ? status === "trial"
        ? "Trial Users"
        : status === "subscribed"
        ? "Subscribed Users"
        : "Cancelled Users"
      : pageTitle;

  return { pageTitle, mobileHeaderTitle, mobilePageTitle };
};

export function isJSON(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

export const formatDate = (isoString) => {
  return moment(isoString).format("MMM DD YYYY hh:mm A");
};

export const getLastHeading = (searchParams) => {
  const queryParams = new URLSearchParams(searchParams);
  const status = queryParams.get("status") || "trial";

  return status === "subscribed"
    ? "Cleared"
    : status === "cancelled"
    ? "Cancelled"
    : "Clearance";
};
