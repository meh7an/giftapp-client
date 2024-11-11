function ETH() {
  return (
    <svg height="1em" viewBox="0 0 11 16" fill="none">
      <path
        d="M5.74854 0.141602V5.95148L10.6581 8.14575L5.74854 0.141602Z"
        fill="currentColor"
        fillOpacity="0.602"
      />
      <path
        d="M5.74857 0.141602L0.838379 8.14575L5.74857 5.95148V0.141602Z"
        fill="currentColor"
      />
      <path
        d="M5.74854 11.9106V15.8583L10.6613 9.06006L5.74854 11.9106Z"
        fill="currentColor"
        fillOpacity="0.602"
      />
      <path
        d="M5.74857 15.8583V11.91L0.838379 9.06006L5.74857 15.8583Z"
        fill="currentColor"
      />
      <path
        d="M5.74854 10.9971L10.6581 8.14583L5.74854 5.95288V10.9971Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M0.838379 8.14583L5.74857 10.9971V5.95288L0.838379 8.14583Z"
        fill="currentColor"
        fillOpacity="0.602"
      />
    </svg>
  );
}

function TON() {
  return (
    <svg height="1em" viewBox="0 0 14 14" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1564 0.583984C11.4653 0.583984 11.7742 0.629776 12.0977 0.779818C12.4855 0.961036 12.6901 1.24553 12.8343 1.45598C13.0229 1.7649 13.1224 2.11997 13.1217 2.48191C13.1231 2.83833 13.0332 3.18916 12.8606 3.50102L7.33584 12.9897C7.21433 13.1994 6.99002 13.3281 6.74765 13.3273C6.50528 13.3265 6.28182 13.1963 6.16171 12.9858L0.739259 3.51661L0.734387 3.50882C0.61064 3.30422 0.418687 2.98854 0.384583 2.58031C0.321819 1.8116 0.7428 1.08466 1.44082 0.756435C1.80718 0.585933 2.17843 0.583984 2.41228 0.583984H11.1564ZM6.07206 1.94021H2.41228C2.1716 1.94021 2.07904 1.95482 2.01473 1.98502C1.82869 2.07117 1.71707 2.26513 1.73605 2.46925C1.74092 2.52771 1.76431 2.59298 1.90267 2.82097L1.91144 2.83558L6.07206 10.1009V1.94021ZM7.42841 10.1369L11.6865 2.82389C11.7401 2.71795 11.7675 2.60066 11.7664 2.48191C11.7664 2.37766 11.7449 2.28705 11.6962 2.19352C11.6642 2.14461 11.6284 2.09834 11.589 2.05517C11.5709 2.03543 11.5491 2.01952 11.5247 2.0084C11.4089 1.95727 11.2828 1.93391 11.1564 1.9402H7.42841V10.1369Z"
        fill="currentColor"
      />
    </svg>
  );
}

function USDT() {
  return (
    <svg height="1em" viewBox="0 0 17 14" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.76409 6.86115C10.6827 6.86115 12.2862 6.53964 12.6781 6.11004C12.3453 5.74567 11.1418 5.45872 9.61338 5.38021V6.28779C9.33977 6.30189 9.05528 6.3088 8.76382 6.3088C8.47235 6.3088 8.18786 6.30189 7.91369 6.28779V5.38021C6.38581 5.45872 5.18175 5.74567 4.849 6.11004C5.24143 6.53964 6.84518 6.86115 8.76382 6.86115H8.76409ZM12.173 2.58916V3.83899H9.61338V4.70567C11.4113 4.79828 12.7603 5.17923 12.7704 5.63509V6.58553C12.7603 7.0414 11.4113 7.42152 9.61338 7.51441V9.64142H7.91397V7.51441C6.1161 7.42179 4.76756 7.0414 4.75752 6.58553V5.63509C4.76756 5.17923 6.1161 4.79828 7.91397 4.70567V3.83899H5.35439V2.58916H12.1732H12.173ZM4.3478 0.600098H13.3332C13.548 0.600098 13.7457 0.71206 13.8528 0.893965L16.4704 5.34924C16.606 5.58036 16.5658 5.87201 16.3723 6.05917L9.16684 13.0307C8.93311 13.2566 8.5577 13.2566 8.32453 13.0307L1.12804 6.06857C0.930287 5.87671 0.892913 5.57676 1.03878 5.34454L3.83711 0.880142C3.94616 0.706531 4.13973 0.600374 4.34808 0.600374L4.3478 0.600098Z"
        fill="currentColor"
      />
    </svg>
  );
}

const currencyColor = (currency: string) =>
  currency === "USDT"
    ? "#009393"
    : currency === "TON"
    ? "#35AFF1"
    : currency === "BTC"
    ? "#F7931A"
    : currency === "ETH"
    ? "#627EEA"
    : "#000000";

export function CurrencyIcon({
  currency,
  colored,
}: {
  currency: string;
  colored?: boolean;
}) {
  let currencyIcon = null;
  switch (currency) {
    case "ETH":
      currencyIcon = <ETH />;
      break;
    case "TON":
      currencyIcon = <TON />;
      break;
    case "USDT":
      currencyIcon = <USDT />;
      break;
    default:
      currencyIcon = null;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "50%",
        background: colored ? currencyColor(currency) : "transparent",
        fontSize: "0.80rem",
      }}
    >
      {currencyIcon}
    </div>
  );
}