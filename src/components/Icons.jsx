/* eslint-disable react/prop-types */
export const IconLink = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994"
      className="stroke-text-primary"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCopy = ({ strokeClass, fillClass }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z"
      className={strokeClass || "stroke-text-primary"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11Z"
      className={fillClass || "fill-text-primary"}
    />
  </svg>
);

export const IconDelete = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 4.47801V4.70501C17.799 4.8238 19.0927 4.9946 20.378 5.21701C20.4751 5.23382 20.5678 5.26958 20.6511 5.32225C20.7343 5.37491 20.8063 5.44346 20.8631 5.52397C20.9198 5.60448 20.9601 5.69537 20.9817 5.79146C21.0033 5.88755 21.0058 5.98696 20.989 6.08401C20.9722 6.18106 20.9364 6.27384 20.8838 6.35707C20.8311 6.4403 20.7626 6.51233 20.682 6.56907C20.6015 6.62581 20.5106 6.66613 20.4146 6.68774C20.3185 6.70935 20.2191 6.71182 20.122 6.69501L19.913 6.66001L18.908 19.73C18.8501 20.4836 18.5098 21.1875 17.9553 21.7011C17.4008 22.2146 16.6728 22.5 15.917 22.5H8.08401C7.3282 22.5 6.60026 22.2146 6.04573 21.7011C5.4912 21.1875 5.15095 20.4836 5.09301 19.73L4.08701 6.66001L3.87801 6.69501C3.78096 6.71182 3.68155 6.70935 3.58546 6.68774C3.48937 6.66613 3.39847 6.62581 3.31796 6.56907C3.15537 6.45449 3.04495 6.28 3.01101 6.08401C2.97706 5.88801 3.02236 5.68656 3.13694 5.52397C3.25153 5.36137 3.42601 5.25096 3.62201 5.21701C4.90727 4.99433 6.20099 4.82353 7.50001 4.70501V4.47801C7.50001 2.91401 8.71301 1.57801 10.316 1.52701C11.4387 1.49108 12.5623 1.49108 13.685 1.52701C15.288 1.57801 16.5 2.91401 16.5 4.47801ZM10.364 3.02601C11.4547 2.99113 12.5463 2.99113 13.637 3.02601C14.39 3.05001 15 3.68401 15 4.47801V4.59101C13.0018 4.46966 10.9982 4.46966 9.00001 4.59101V4.47801C9.00001 3.68401 9.60901 3.05001 10.364 3.02601ZM10.009 8.97101C10.0052 8.87252 9.98203 8.77574 9.94082 8.6862C9.89961 8.59667 9.84117 8.51612 9.76883 8.44917C9.69649 8.38222 9.61168 8.33017 9.51923 8.296C9.42678 8.26183 9.3285 8.2462 9.23001 8.25001C9.13152 8.25382 9.03474 8.27699 8.9452 8.3182C8.85567 8.35941 8.77512 8.41785 8.70817 8.49019C8.64122 8.56252 8.58917 8.64734 8.555 8.73979C8.52083 8.83224 8.5052 8.93052 8.50901 9.02901L8.85601 18.029C8.8637 18.2278 8.95004 18.4154 9.09604 18.5505C9.16833 18.6174 9.25309 18.6694 9.34548 18.7036C9.43787 18.7377 9.53608 18.7533 9.63451 18.7495C9.73293 18.7457 9.82964 18.7225 9.91912 18.6814C10.0086 18.6402 10.0891 18.5818 10.156 18.5095C10.2229 18.4372 10.2749 18.3524 10.3091 18.26C10.3432 18.1676 10.3588 18.0694 10.355 17.971L10.009 8.97101ZM15.489 9.02901C15.4963 8.92863 15.4834 8.82779 15.4509 8.73252C15.4185 8.63725 15.3672 8.54948 15.3001 8.47445C15.233 8.39942 15.1515 8.33866 15.0604 8.2958C14.9694 8.25293 14.8706 8.22883 14.77 8.22494C14.6694 8.22104 14.5691 8.23743 14.475 8.27313C14.3809 8.30883 14.2949 8.3631 14.2222 8.43272C14.1496 8.50234 14.0916 8.58587 14.0519 8.67835C14.0122 8.77083 13.9915 8.87036 13.991 8.97101L13.644 17.971C13.6363 18.1699 13.708 18.3637 13.8432 18.5098C13.9784 18.6559 14.1661 18.7423 14.365 18.75C14.5639 18.7577 14.7577 18.6861 14.9038 18.5508C15.0499 18.4156 15.1363 18.2279 15.144 18.029L15.489 9.02901Z"
      className={className || "fill-text-primary"}
    />
  </svg>
);

export const IconCalendar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 2.25C6.94891 2.25 7.13968 2.32902 7.28033 2.46967C7.42098 2.61032 7.5 2.80109 7.5 3V4.5H16.5V3C16.5 2.80109 16.579 2.61032 16.7197 2.46967C16.8603 2.32902 17.0511 2.25 17.25 2.25C17.4489 2.25 17.6397 2.32902 17.7803 2.46967C17.921 2.61032 18 2.80109 18 3V4.5H18.75C19.5456 4.5 20.3087 4.81607 20.8713 5.37868C21.4339 5.94129 21.75 6.70435 21.75 7.5V18.75C21.75 19.5456 21.4339 20.3087 20.8713 20.8713C20.3087 21.4339 19.5456 21.75 18.75 21.75H5.25C4.45435 21.75 3.69129 21.4339 3.12868 20.8713C2.56607 20.3087 2.25 19.5456 2.25 18.75V7.5C2.25 6.70435 2.56607 5.94129 3.12868 5.37868C3.69129 4.81607 4.45435 4.5 5.25 4.5H6V3C6 2.80109 6.07902 2.61032 6.21967 2.46967C6.36032 2.32902 6.55109 2.25 6.75 2.25ZM20.25 11.25C20.25 10.8522 20.092 10.4706 19.8107 10.1893C19.5294 9.90804 19.1478 9.75 18.75 9.75H5.25C4.85218 9.75 4.47064 9.90804 4.18934 10.1893C3.90804 10.4706 3.75 10.8522 3.75 11.25V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V11.25Z"
      className="fill-text-primary"
    />
  </svg>
);

export const IconClick = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-text-primary"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
    />
  </svg>
);

export const IconClose = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      className={className || "fill-text-primary"}
    />
  </svg>
);

export const IconSun = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-text-primary"
  >
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
  </svg>
);

export const IconMoon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-text-primary"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
    />
  </svg>
);
