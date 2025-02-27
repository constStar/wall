package cn.conststar.wall.pojo.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ApiModel("评论举报实体")
public class ReportCommentDomain {

    @ApiModelProperty("对应的评论id")
    int commentId;

    @ApiModelProperty("举报者的用户id")
    int reportUserId;

    @ApiModelProperty("举报者的用户名称")
    String reportUserName;

    @ApiModelProperty("举报类型")
    int type;

    @ApiModelProperty("举报类型名称")
    String typeName;

    @Max(value = 500, message = "举报内容不能超过500字")
    @ApiModelProperty("举报内容")
    String content;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("举报状态")
    int state;

    @ApiModelProperty("举报状态名称")
    String stateName;
}
