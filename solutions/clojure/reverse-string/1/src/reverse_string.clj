(ns reverse-string)

(defn reverse-string
  "Takes a string, reduces into a list via conj, then appies the result into a string."
  [s]
  (apply str (reduce conj () s)))