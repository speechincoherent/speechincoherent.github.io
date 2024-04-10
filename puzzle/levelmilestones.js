const milestones = ["hydrogen"];
window.onload = logMilestone()
function logmilestone() {
if (milestones.includes(this.href.substring(this.href.lastIndexOf('/') + 1))) {
    var levelMilestone = getCookie("levelMilestone")
    if (levelMilestone == null) {
        document.cookie = "levelMilestone"=this.href.substring(this.href.lastIndexOf('/') + 1); path=/puzzle/;
    }
    else {
        let currentLevelPos = milestones.indexOf(this.href.substring(this.href.lastIndexOf('/') + 1));
        let levelMilestonePos = indexOf(levelMilestone);
            if (currentLevelPos > levelMilestonePos) {
                document.cookie = "levelMilestone"=this.href.substring(this.href.lastIndexOf('/') + 1); path=/puzzle/;
            }
            else {
                void(0)
            }
        };
    };
};

