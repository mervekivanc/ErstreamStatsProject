var offsetMilliseconds = new Date().getTimezoneOffset() * 60000;

Date.isLeapYear = function (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};
Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear());
};
Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};
Date.prototype.getUTCDateTime = function () {
    return new Date(
      this.getUTCFullYear(),
      this.getUTCMonth(),
      this.getUTCDate(),
      this.getUTCHours(),
      this.getUTCMinutes(),
      this.getUTCSeconds()
    );
}
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
Date.prototype.trimDateTime = function (h) {
    if (h === "minutes") {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), 0);
    }

    else if (h === "hours") {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), 0, 0);
    }

    else if (h === "days") {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
    }

    else if (h === "months") {
        return new Date(this.getFullYear(), this.getMonth(), 1, 0, 0, 0);
    }

    else
        return null;
}
