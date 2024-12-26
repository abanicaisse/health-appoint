export const GenderOptions = ["Male", "Female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "National Identity Card",
  "Passport",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Aba Nicaisse",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Maria Mutombo",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Esther Mahahya",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "James Butembo",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alexa Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Josephine Mumbere",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Aline Baraka",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dieumerci Mbokani",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
