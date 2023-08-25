enum Statuses {
    applied,
    confirmed,
    processing,
    rejected,
    approved
}

function setStatus(status: Statuses)
{
    if (status == Statuses.rejected)
        console.log('Rejected!');
}

setStatus(Statuses.rejected);