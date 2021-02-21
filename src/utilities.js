export const drawRect = (detections, ctx) =>{
    detections.forEach(predictions =>{
        const [x,y,width,height] = predictions['bbox']
        const text = predictions['class'] + "  " + String(parseInt(parseFloat(predictions['score'])*100))+"%"


        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '24px helvetica'
        ctx.fillStyle = color
        

        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    })
}