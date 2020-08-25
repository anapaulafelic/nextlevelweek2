module.exports = async function(db, { proffyValue, classValue,
    classScheduleValues }) {
    //inserir dados na tabela proffys - awiat = aguarde antes de ir para próxima linha - `` template literals
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
        name,
        avatar,
        whatsapp,
        bio
        ) VALUES (
           "${proffyValue.name}",
           "${proffyValue.avatar}",
           "${proffyValue.whatsapp}",
           "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertedProffy.lastID

    //inserir dados na tb classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
           "${classValue.subject}",
           "${classValue.cost}",
           "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tb class_schedule - o map consegue agrupar  e retornar um novo array
    const insertedAllClassScheduleValues = classScheduleValues.map(
        (classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // aqui executaremos todos os dbs runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}