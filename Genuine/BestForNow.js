
if (self === top) {
    document.documentElement.style.visibility = 'visible';
} else {
    top.location = self.location;
}
