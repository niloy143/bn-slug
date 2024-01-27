## Bengali Slug Generator

**Step-1:** Install the package `npm i bn-slug`

**Step-2:** Import the generator `import bnSlug from "bn-slug"`

**Step-3:** Call the generator `bnSlug()`

That’s it.

### Here is an example:
```javascript
import bnSlug from "bn-slug";

console.log(bnSlug()); // output: হলুদ-ঘুমন্ত-বাঘ
console.log(bnSlug()); // output: লাল-সুন্দর-গোলাপ
```

Optionally you can pass a type parameter specifying which type of slug should be returned. 
There are three possible types: 
* `bn`: returns the slug in Bengali words. Example: `হলুদ-ঘুমন্ত-বাঘ`, `লাল-সুন্দর-গোলাপ`
* `en`: returns the slug in English words. Example: `yellow-sleeping-tiger`, `red-beautiful-rose`
* `pron`: returns the slug in Banglish words (Bengali words written in English letters). Example: `holud-ghumonto-bagh`, `lal-sundor-golap`

By default type `bn` is selected.

### Example
```javascript
import bnSlug from "bn-slug";

console.log(bnSlug("bn")); // হলুদ-ঘুমন্ত-বাঘ
console.log(bnSlug("bn")); // লাল-সুন্দর-গোলাপ

console.log(bnSlug("en")); // yellow-sleeping-tiger
console.log(bnSlug("en")); // red-beautiful-rose

console.log(bnSlug("pron")); // holud-ghumonto-bagh
console.log(bnSlug("pron")); // lal-sundor-golap
```
