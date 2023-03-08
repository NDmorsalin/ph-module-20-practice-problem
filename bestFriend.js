/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

function bestFriend(fNames) {
  let bFriend = 0;
  let bName = "";
  for (let i = 0; i < fNames.length; i++) {
    if (bFriend < fNames[i].length) {
      bFriend = fNames[i].length;
      bName = fNames[i];
    }
  }

  return bName;
}

console.log(
  bestFriend([
    "Bertha Newman",
    "Mamie Vaughn",
    "Laurence Diaz",
    "Blanche Mathis",
    "Jane Guzman",
    "Viola Roberts",
    "Fredrick Mills",
    "Meredith Goodman",
    "Phil Lawrence",
    "Eileen Frank",
  ])
);
