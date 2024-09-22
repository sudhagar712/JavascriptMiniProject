const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

const updateCounts = () => {
  const text = input.value.trim();

  wordCount.textContent = text ? text.split(/\s+/).length : 0;
  characterCount.textContent = text.length;
  sentenceCount.textContent = (text.match(/[.!?]/g) || []).length;
  paragraphCount.textContent = text
    ? text.split(/\n+/).filter(Boolean).length
    : 0;
};

input.addEventListener("input", updateCounts);
